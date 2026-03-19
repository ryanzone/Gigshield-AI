import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, GRADIENTS, SPACING, BORDER_RADIUS } from '../constants/Theme';
import { ThemedText } from '../components/core/ThemedText';
import { SurfaceCard } from '../components/core/SurfaceCard';
import { AIInsightChip } from '../components/core/AIInsightChip';

export default function TriggerViewScreen({ route, navigation }: any) {
    const { condition = 'Extreme Heat', value = 'High', threshold = '38°C' } = route.params || {};
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Top bar */}
            <View style={styles.topBar}>
                <View style={styles.topBarLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={24} color={COLORS.onSurface} />
                    </TouchableOpacity>
                    <ThemedText variant="h3" color={COLORS.primary} style={{ fontWeight: '900', letterSpacing: -1 }}>
                        GigShield
                    </ThemedText>
                </View>
                <View style={styles.avatar}>
                    <MaterialIcons name="person" size={18} color={COLORS.onSurface} />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Condition Indicators */}
                <View style={styles.indicatorsGrid}>
                    <ConditionIndicator icon="air" label="Air Quality" value="Moderate" progress={0.5} color={COLORS.secondary} />
                    <ConditionIndicator icon="waves" label="Wind Speed" value="Low" progress={0.25} color={COLORS.primary} />
                </View>

                {/* Main Alert Card */}
                <AlertCard condition={condition} value={value} threshold={threshold} />

                {/* Location / Policy info */}
                <View style={styles.infoGrid}>
                    <SurfaceCard variant="default" style={styles.locationCard}>
                        <ThemedText variant="overline" color={`${COLORS.onSurface}66`}>Location Context</ThemedText>
                        <View style={{ marginTop: 'auto' }}>
                            <ThemedText variant="h3">Austin, Texas</ThemedText>
                            <ThemedText variant="caption" color={`${COLORS.onSurface}66`}>Station: AUS-CENTRAL-04</ThemedText>
                        </View>
                    </SurfaceCard>
                    <SurfaceCard variant="default" style={styles.policyCard} borderAccent={COLORS.primary} borderSide="left">
                        <ThemedText variant="overline" color={`${COLORS.onSurface}66`}>Policy</ThemedText>
                        <ThemedText variant="h1" style={{ fontSize: 32, marginTop: 'auto' as any }}>#882</ThemedText>
                    </SurfaceCard>
                </View>

                {/* View Policy Button */}
                <TouchableOpacity activeOpacity={0.85} style={styles.viewPolicyBtn}>
                    <LinearGradient
                        colors={GRADIENTS.primary as any}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.viewPolicyGradient}
                    >
                        <ThemedText variant="body" color={COLORS.onPrimary} style={{ fontWeight: '700', fontSize: 16 }}>
                            View Policy Details
                        </ThemedText>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

// ─── Sub Components ────────────────────────────────────

function ConditionIndicator({ icon, label, value, progress, color }: {
    icon: keyof typeof MaterialIcons.glyphMap; label: string; value: string; progress: number; color: string;
}) {
    return (
        <SurfaceCard variant="low" style={styles.conditionCard}>
            <View style={styles.conditionTop}>
                <MaterialIcons name={icon} size={24} color={color} />
                <ThemedText variant="overline" color={`${COLORS.onSurface}66`}>{label}</ThemedText>
            </View>
            <View>
                <ThemedText variant="h2" style={{ fontSize: 24 }}>{value}</ThemedText>
                <View style={styles.conditionBar}>
                    <View style={[styles.conditionFill, { width: `${progress * 100}%`, backgroundColor: color }]} />
                </View>
            </View>
        </SurfaceCard>
    );
}

function AlertCard({ condition, value, threshold }: { condition: string; value: string; threshold: string }) {
    return (
        <View style={styles.alertWrapper}>
            {/* Glow */}
            <View style={styles.alertGlow} />
            <View style={styles.alertCard}>
                <View style={styles.alertTop}>
                    <View style={styles.alertIconBox}>
                        <MaterialIcons name="warning" size={28} color={COLORS.primary} />
                    </View>
                    <View style={styles.shieldBadge}>
                        <ThemedText variant="overline" color={COLORS.onSecondaryContainer} style={{ fontWeight: '700' }}>
                            Active Shield
                        </ThemedText>
                    </View>
                </View>

                <ThemedText variant="h1" style={{ fontSize: 32, lineHeight: 38, marginTop: SPACING.lg }}>
                    Condition Triggered:{' '}
                    <ThemedText variant="h1" color={COLORS.primary} style={{ fontSize: 32 }}>
                        {condition} Alert.
                    </ThemedText>
                </ThemedText>

                <ThemedText variant="body" color={`${COLORS.onSurface}99`} style={{ fontSize: 16, lineHeight: 24, marginTop: SPACING.md }}>
                    The local condition has reached your policy threshold of {threshold}. Your dynamic protection is now in effect.
                </ThemedText>

                {/* Payout status */}
                <PayoutStatus />

                {/* AI tip */}
                <AIInsightChip
                    variant="compact"
                    description="GigShield AI recommends limiting outdoor activity and staying safe."
                    style={{ marginTop: SPACING.lg }}
                />
            </View>
        </View>
    );
}

function PayoutStatus() {
    return (
        <TouchableOpacity style={styles.payoutRow} activeOpacity={0.7}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={styles.payoutIcon}>
                    <MaterialIcons name="payments" size={24} color={COLORS.secondary} />
                </View>
                <View style={{ marginLeft: 16 }}>
                    <ThemedText variant="overline" color={COLORS.secondary} style={{ fontWeight: '700' }}>
                        Payout Initiated
                    </ThemedText>
                    <ThemedText variant="h3" style={{ marginTop: 2 }}>$42.50 USD</ThemedText>
                </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={`${COLORS.onSurface}33`} />
        </TouchableOpacity>
    );
}

// ─── Styles ────────────────────────────────────────────

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    topBar: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: SPACING.lg, paddingVertical: 12,
    },
    topBarLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    avatar: {
        width: 32, height: 32, borderRadius: 16,
        backgroundColor: COLORS.surfaceContainerHighest,
        justifyContent: 'center', alignItems: 'center',
    },
    scrollContent: { paddingHorizontal: SPACING.lg },
    indicatorsGrid: { flexDirection: 'row', gap: 12, marginBottom: SPACING.xl },
    conditionCard: { flex: 1, height: 160, justifyContent: 'space-between' },
    conditionTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    conditionBar: {
        height: 4, backgroundColor: COLORS.surfaceContainerHighest,
        borderRadius: 2, overflow: 'hidden', marginTop: 8,
    },
    conditionFill: { height: '100%', borderRadius: 2 },
    alertWrapper: { position: 'relative', marginBottom: SPACING.xl },
    alertGlow: {
        position: 'absolute', top: -16, left: -16, right: -16, bottom: -16,
        backgroundColor: 'rgba(206, 189, 255, 0.08)', borderRadius: 999,
    },
    alertCard: {
        backgroundColor: COLORS.surfaceContainerLow,
        borderRadius: BORDER_RADIUS.xl, padding: SPACING.xl,
        borderWidth: 1, borderColor: 'rgba(73, 69, 82, 0.1)',
    },
    alertTop: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
    },
    alertIconBox: {
        backgroundColor: 'rgba(206, 189, 255, 0.15)', padding: 12, borderRadius: BORDER_RADIUS.lg,
    },
    shieldBadge: {
        backgroundColor: 'rgba(0, 109, 66, 0.2)', paddingHorizontal: 12, paddingVertical: 4,
        borderRadius: BORDER_RADIUS.round, borderWidth: 1, borderColor: 'rgba(128, 217, 164, 0.2)',
    },
    payoutRow: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: 'rgba(53, 53, 52, 0.4)', padding: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg, marginTop: SPACING.xl,
    },
    payoutIcon: {
        width: 48, height: 48, borderRadius: 24,
        backgroundColor: 'rgba(128, 217, 164, 0.1)',
        justifyContent: 'center', alignItems: 'center',
    },
    infoGrid: { flexDirection: 'row', gap: 12, marginBottom: SPACING.xl },
    locationCard: { flex: 2, height: 140, justifyContent: 'space-between' },
    policyCard: { flex: 1, height: 140, justifyContent: 'space-between' },
    viewPolicyBtn: { borderRadius: BORDER_RADIUS.lg, overflow: 'hidden' },
    viewPolicyGradient: {
        paddingVertical: 16, alignItems: 'center', justifyContent: 'center',
    },
});
